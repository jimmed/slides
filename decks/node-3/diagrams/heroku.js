const manifest = [{ name: "git", count: 3 }];

module.exports = Object.fromEntries(
  manifest.map((image) => {
    const path = image.name.replace(/[A-Z]/g, (x) => `-${x.toLowerCase()}`);
    const images = image.count
      ? Array(image.count)
          .fill(0)
          .map((_, i) => require(`./heroku-${path}-${i + 1}.svg`))
      : [require(`./heroku-${path}.svg`)];
    return [image.name, images];
  })
);
