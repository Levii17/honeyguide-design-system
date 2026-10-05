import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { App } from '@/App';
import { ContrastChecker, ContrastTable } from '../ContrastChecker';
import { ToastProvider } from '../Toast';
import { TokenExport } from '../TokenExport';
import { SECTIONS } from '@/content/nav';
import { ICON_REGISTRY } from '@/content/icons';
import { COLORS } from '@/content/tokens';
import { contrastRatio, formatRatio } from '@/lib/color';

afterEach(() => vi.restoreAllMocks());
const wrap = (ui: React.ReactNode) => render(<ToastProvider>{ui}</ToastProvider>);

describe('site shell', () => {
  it('renders every section with a heading, in navigation order', () => {
    render(<App />);
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      expect(el, s.id).toBeInTheDocument();
      expect(within(el!).getAllByRole('heading', { level: 2 })).toHaveLength(1);
    }
    const order = [...document.querySelectorAll('section.section')].map((e) => e.id);
    expect(order).toEqual(SECTIONS.map((s) => s.id));
  });

  it('links every nav entry to a section that exists', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Sections' });
    const links = within(nav).getAllByRole('link');
    expect(links).toHaveLength(SECTIONS.length);
    for (const a of links) expect(document.querySelector(a.getAttribute('href')!)).not.toBeNull();
  });

  it('offers a skip link and a single h1', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('gives every image an alt attribute', () => {
    render(<App />);
    for (const img of document.querySelectorAll('img')) expect(img.hasAttribute('alt')).toBe(true);
  });
});

describe('icon gallery', () => {
  it('filters by search text and by category', async () => {
    const user = userEvent.setup();
    render(<App />);
    const section = document.getElementById('icons')!;
    expect(within(section).getAllByRole('button', { name: /Copy name/ })).toHaveLength(ICON_REGISTRY.length);

    await user.type(within(section).getByRole('searchbox', { name: 'Search icons' }), 'streak');
    expect(within(section).getAllByRole('button', { name: /Copy name/ })).toHaveLength(1);
    expect(within(section).getByRole('button', { name: /flame/ })).toBeInTheDocument();

    await user.clear(within(section).getByRole('searchbox'));
    await user.click(within(section).getByRole('button', { name: 'Civics' }));
    const civics = ICON_REGISTRY.filter((i) => i.category === 'Civics').length;
    expect(within(section).getAllByRole('button', { name: /Copy name/ })).toHaveLength(civics);
  });

  it('shows an empty state when nothing matches', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByRole('searchbox', { name: 'Search icons' }), 'zzzz');
    expect(screen.getByText(/No icons match "zzzz"/)).toBeInTheDocument();
  });
});

describe('colour swatches', () => {
  it('copies the hex value and confirms with a toast', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.spyOn(navigator.clipboard, 'writeText').mockImplementation(writeText);
    render(<App />);
    await user.click(screen.getByRole('button', { name: /Jade Green #0FA676/ }));
    expect(writeText).toHaveBeenCalledWith('#0FA676');
    expect(await screen.findByText('Copied #0FA676')).toBeInTheDocument();
  });

  it('is honest when the clipboard is blocked', async () => {
    const user = userEvent.setup();
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('denied'));
    render(<App />);
    await user.click(screen.getByRole('button', { name: /Jade Green #0FA676/ }));
    expect(await screen.findByText(/Couldn't copy/)).toBeInTheDocument();
  });

  it('renders a swatch for every token', () => {
    render(<App />);
    for (const c of COLORS) expect(screen.getAllByRole('button', { name: new RegExp(`${c.name} ${c.hex}`, 'i') }).length).toBeGreaterThan(0);
  });
});

describe('ContrastChecker', () => {
  it('starts on the body-text pairing and passes AAA', () => {
    wrap(<ContrastChecker />);
    expect(screen.getByText('7.6:1')).toBeInTheDocument();
    expect(screen.getByText(/Pass · AAA/)).toBeInTheDocument();
  });

  it('loads a known failure and reports it as failing', async () => {
    const user = userEvent.setup();
    wrap(<ContrastChecker />);
    await user.click(screen.getByRole('button', { name: 'White text on coral' }));
    expect(screen.getByText(formatRatio(contrastRatio('#FFFFFF', '#FF6B57')!))).toBeInTheDocument();
    expect(screen.getByText(/Fail · Body text/)).toBeInTheDocument();
    expect(screen.getByText(/Fail · Icons and UI/)).toBeInTheDocument();
  });

  it('swaps foreground and background without changing the ratio', async () => {
    const user = userEvent.setup();
    wrap(<ContrastChecker />);
    await user.click(screen.getByRole('button', { name: 'Swap' }));
    expect(screen.getByLabelText('Text')).toHaveValue('#F6EFDD');
    expect(screen.getByText('7.6:1')).toBeInTheDocument();
  });

  it('flags invalid hex instead of guessing', async () => {
    const user = userEvent.setup();
    wrap(<ContrastChecker />);
    const field = screen.getByLabelText('Text');
    await user.clear(field);
    await user.type(field, '#12');
    expect(field).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Enter two valid hex colours')).toBeInTheDocument();
  });
});

describe('ContrastTable', () => {
  it('passes the system pairings and fails the documented bad ones', () => {
    wrap(<ContrastTable />);
    const rows = screen.getAllByRole('row').slice(1);
    const byLabel = (l: string) => rows.find((r) => within(r).queryByText(l))!;
    expect(within(byLabel('Body text')).getByText(/Pass/)).toBeInTheDocument();
    expect(within(byLabel('Focus ring on background')).getByText(/Pass/)).toBeInTheDocument();
    expect(within(byLabel('White text on gold')).getByText(/Fail/)).toBeInTheDocument();
    expect(within(byLabel('Sky (light) focus ring on Background')).getByText(/Fail/)).toBeInTheDocument();
  });
});

describe('TokenExport', () => {
  it('switches between CSS and JSON and copies what it shows', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.spyOn(navigator.clipboard, 'writeText').mockImplementation(writeText);
    wrap(<TokenExport />);
    expect(screen.getByLabelText('CSS variables token export').textContent).toContain('--green: #0fa676;');

    await user.click(screen.getByRole('tab', { name: 'JSON' }));
    const json = screen.getByLabelText('JSON token export').textContent!;
    expect(JSON.parse(json).color.primary.green.value).toBe('#0FA676');

    await user.click(screen.getByRole('button', { name: /Copy/ }));
    expect(writeText).toHaveBeenCalledWith(json);
  });
});

describe('buttons specimen', () => {
  it('shows a loading state and then recovers', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(<App />);
    const btn = screen.getByRole('button', { name: 'Tap to save' });
    await user.click(btn);
    expect(screen.getByRole('button', { name: 'Saving' })).toHaveAttribute('aria-busy', 'true');
    await act(async () => { await vi.advanceTimersByTimeAsync(1500); });
    expect(screen.getByRole('button', { name: 'Tap to save' })).toHaveAttribute('aria-busy', 'false');
    vi.useRealTimers();
  });
});
