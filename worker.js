export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Serve TikTok verification files: /tiktokXXXXX.txt
    // Content = filename without leading slash and without .txt
    if (path.startsWith('/tiktok') && path.endsWith('.txt')) {
      const token = path.slice(1, -4);
      return new Response(token, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      });
    }

    // Homepage
    const html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Post Claude Code</title></head><body><h1>Post Claude Code</h1><p>TikTok video automation with Claude AI.</p></body></html>';
    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};
