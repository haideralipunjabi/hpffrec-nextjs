let config = {
    title:"HPFanfiction Recommender",
    description:"Recommendation from r/HPFanfiction",
    url:"https://hpffrec.hackesta.org",
}
export default {
    title:config.title,
    description:config.description,
    canonical:config.url,
    openGraph: {
      url:  config.url,
      title: config.title,
      description: config.description,
      type: 'website',
      url: config.url,
      site_name: config.title,
      images: [
        {
          url: config.url+'/og.png',
          width: 3750,
          height: 1969,
          alt: 'OG Image'
      },
      ]
    },
  };
