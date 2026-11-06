export const featuredSite = {
  name: "Cher Phillips for Alderman",
  url: "https://www.electcher7thward.com",
  displayUrl: "electcher7thward.com",
  image: "/work/alderman-site.jpg",
  summary:
    "A custom-built campaign site with pages for the candidate, her priorities, resources and events, plus a donate button that stays in reach.",
};

/**
 * More projects, shown as cards under the featured site. Add `url` to show a
 * visit link; leave it empty to keep the project unnamed.
 */
export const moreWork: { name: string; tags: string[]; summary: string; url?: string }[] = [
  {
    name: "University startup",
    tags: ["Business website", "Equity partner"],
    summary:
      "Helped two founders, both Iowa State University professors, create their business website, and took equity in the company.",
  },
];

/**
 * Photos of PCs you've built. Drop images in /public/work/builds/ and list them here,
 * e.g. { src: "/work/builds/white-itx.jpg", alt: "White mini-ITX gaming build" }.
 * The section stays hidden until at least one photo is listed.
 */
export const buildPhotos: { src: string; alt: string }[] = [];

export const homelab = [
  { icon: "/homeLabIcons/jellyfin.png", name: "Jellyfin", detail: "Family movies, shows and music" },
  { icon: "/homeLabIcons/audiobookshelf.png", name: "Audiobookshelf", detail: "Audiobooks and podcasts" },
  { icon: "/homeLabIcons/uptime-kuma.png", name: "Uptime Kuma", detail: "Alerts when something goes down" },
  { icon: "/homeLabIcons/nginx-proxy-manager.png", name: "Nginx Proxy Manager", detail: "Secure access to every service" },
  { icon: "/homeLabIcons/homepage.png", name: "Homepage", detail: "One dashboard for everything" },
  { icon: "/homeLabIcons/filebrowser-quantum.png", name: "File Browser", detail: "Private cloud storage" },
  { icon: "/homeLabIcons/homebox.png", name: "Homebox", detail: "Home inventory" },
  { icon: "/homeLabIcons/jellyseerr.png", name: "Jellyseerr", detail: "Media requests" },
];
