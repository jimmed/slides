const manifest = [
  { name: "start" },
  { name: "getAll", count: 3 },
  { name: "getById", count: 3 },
  { name: "post", count: 4 },
  { name: "delete", count: 4 },
];

module.exports = Object.fromEntries(
  manifest.map((image) => {
    const path = image.name.replace(/[A-Z]/g, (x) => `-${x.toLowerCase()}`);
    const images = image.count
      ? Array(image.count)
          .fill(0)
          .map((_, i) => require(`./crud-${path}-${i + 1}.svg`))
      : [require(`./crud-${path}.svg`)];
    return [image.name, images];
  })
);
