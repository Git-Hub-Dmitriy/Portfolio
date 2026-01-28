export default function changeFilterTag(value, category, setFiltersBlog) {
  if (value.length === 0) {
    if (category) {
      setFiltersBlog({
        category: category,
      });
    } else {
      setFiltersBlog({});
    }
  }
  if (value.toLowerCase() !== "") {
    if (category) {
      setFiltersBlog({
        category: category,
        tag: value.toLowerCase(),
      });
    } else {
      setFiltersBlog({
        tag: value.toLowerCase(),
      });
    }
  }
}
