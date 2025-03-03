import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'details/:id',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'categoriesDetails/:id',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'brandsDetails/:id',
    renderMode: RenderMode.Prerender
  },


  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
