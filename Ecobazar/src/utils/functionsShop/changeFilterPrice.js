export default function changeFilterPrice(
  min,
  max,
  category,
  rating,
  tag,
  setFiltersShop
) {
  if (tag && rating && category) {
    setFiltersShop({
      category: category,
      rating: rating,
      tag: tag,
      min: min,
      max: max,
    });
  }
  if (!tag && !rating && !category) {
    setFiltersShop({
      min: min,
      max: max,
    });
  }
  if (!tag && rating && category) {
    setFiltersShop({
      category: category,
      rating: rating,
      min: min,
      max: max,
    });
  }
  if (!tag && !rating && category) {
    setFiltersShop({
      category: category,
      min: min,
      max: max,
    });
  }
  if (!tag && rating && !category) {
    setFiltersShop({
      rating: rating,
      min: min,
      max: max,
    });
  }
  if (tag && !rating && category) {
    setFiltersShop({
      category: category,
      tag: tag,
      min: min,
      max: max,
    });
  }
  if (tag && rating && !category) {
    setFiltersShop({
      rating: rating,
      tag: tag,
      min: min,
      max: max,
    });
  }
  if (tag && !rating && !category) {
    setFiltersShop({
      tag: tag,
      min: min,
      max: max,
    });
  }
}
