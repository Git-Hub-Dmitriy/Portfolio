export default function changeFilterRating(
  value,
  category,
  min,
  max,
  tag,
  setFiltersShop
) {
  if (value.length === 0) {
    if (tag && category && min && max) {
      setFiltersShop({
        category: category,
        min: min,
        max: max,
        tag: tag,
      });
    }
    if (!tag && !category && !min && !max) {
      setFiltersShop({});
    }
    if (tag && !category && !min && !max) {
      setFiltersShop({
        tag: tag,
      });
    }
    if (tag && category && !min && !max) {
      setFiltersShop({
        category: category,
        tag: tag,
      });
    }
    if (tag && category && min && !max) {
      setFiltersShop({
        category: category,
        min: min,
        tag: tag,
      });
    }
    if (tag && category && !min && max) {
      setFiltersShop({
        category: category,
        max: max,
        tag: tag,
      });
    }
    if (tag && !category && min && max) {
      setFiltersShop({
        min: min,
        max: max,
        tag: tag,
      });
    }
    if (tag && !category && !min && max) {
      setFiltersShop({
        max: max,
        tag: tag,
      });
    }
    if (tag && !category && min && !max) {
      setFiltersShop({
        min: min,
        tag: tag,
      });
    }
    if (!tag && category && min && max) {
      setFiltersShop({
        category: category,
        min: min,
        max: max,
      });
    }
    if (!tag && category && !min && !max) {
      setFiltersShop({
        category: category,
      });
    }
    if (!tag && category && min && !max) {
      setFiltersShop({
        category: category,
        min: min,
      });
    }
    if (!tag && category && !min && max) {
      setFiltersShop({
        category: category,
        max: max,
      });
    }
    if (!tag && !category && min && max) {
      setFiltersShop({
        min: min,
        max: max,
      });
    }
    if (!tag && !category && !min && max) {
      setFiltersShop({
        max: max,
      });
    }
    if (!tag && !category && min && !max) {
      setFiltersShop({
        min: min,
      });
    }
  }
  if (value !== "") {
    if (tag && category && min && max) {
      setFiltersShop({
        category: category,
        min: min,
        max: max,
        rating: value,
        tag: tag,
      });
    }
    if (!tag && !category && !min && !max) {
      setFiltersShop({
        rating: value,
      });
    }
    if (tag && !category && !min && !max) {
      setFiltersShop({
        rating: value,
        tag: tag,
      });
    }
    if (tag && category && !min && !max) {
      setFiltersShop({
        category: category,
        rating: value,
        tag: tag,
      });
    }
    if (tag && category && min && !max) {
      setFiltersShop({
        category: category,
        min: min,
        rating: value,
        tag: tag,
      });
    }
    if (tag && category && !min && max) {
      setFiltersShop({
        category: category,
        max: max,
        rating: value,
        tag: tag,
      });
    }
    if (tag && !category && min && max) {
      setFiltersShop({
        min: min,
        max: max,
        rating: value,
        tag: tag,
      });
    }
    if (tag && !category && !min && max) {
      setFiltersShop({
        max: max,
        rating: value,
        tag: tag,
      });
    }
    if (tag && !category && min && !max) {
      setFiltersShop({
        min: min,
        rating: value,
        tag: tag,
      });
    }
    if (!tag && category && min && max) {
      setFiltersShop({
        category: category,
        min: min,
        max: max,
        rating: value,
      });
    }
    if (!tag && category && !min && !max) {
      setFiltersShop({
        category: category,
        rating: value,
      });
    }
    if (!tag && category && min && !max) {
      setFiltersShop({
        category: category,
        min: min,
        rating: value,
      });
    }
    if (!tag && category && !min && max) {
      setFiltersShop({
        category: category,
        max: max,
        rating: value,
      });
    }
    if (!tag && !category && min && max) {
      setFiltersShop({
        min: min,
        max: max,
        rating: value,
      });
    }
    if (!tag && !category && !min && max) {
      setFiltersShop({
        max: max,
        rating: value,
      });
    }
    if (!tag && !category && min && !max) {
      setFiltersShop({
        min: min,
        rating: value,
      });
    }
  }
}
