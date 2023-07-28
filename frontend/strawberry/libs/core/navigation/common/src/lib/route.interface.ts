export interface SitemapConfig {
  loc: string;
  lastmod: string;
  priority: string;
  changefreq: string;
}

export interface RouteData {
  sitemap: SitemapConfig;


  /**
   * TODO MetaService
   */
  meta: any;
  metaOg: any;
}
