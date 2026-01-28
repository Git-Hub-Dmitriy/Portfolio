export default function changeFilterCategory(value, tag, setFiltersBlog) {
  if (value.length === 0) {
    if (tag) {
      setFiltersBlog({
        tag: tag,
      });
    } else {
      setFiltersBlog({});
    }
  }
  if (value.toLowerCase() !== "") {
    if (tag) {
      setFiltersBlog({
        category: value.toLowerCase(),
        tag: tag,
      });
    } else {
      setFiltersBlog({
        category: value.toLowerCase(),
      });
    }
  }
}
