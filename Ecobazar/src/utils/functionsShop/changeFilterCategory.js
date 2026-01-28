export default function changeFilterCategory(
  value,
  rating,
  tag,
  min,
  max,
  setFiltersShop
) {
  if (value.length === 0) {
    if (tag && rating && min && max) {
      setFiltersShop({
        min: min,
        max: max,
        rating: rating,
        tag: tag,
      });
    }
    if (!tag && !rating && !min && !max) {
      setFiltersShop({});
    }
    if (tag && !rating && !min && !max) {
      setFiltersShop({
        tag: tag,
      });
    }
    if (tag && rating && !min && !max) {
      setFiltersShop({
        rating: rating,
        tag: tag,
      });
    }
    if (tag && rating && min && !max) {
      setFiltersShop({
        min: min,
        rating: rating,
        tag: tag,
      });
    }
    if (tag && rating && !min && max) {
      setFiltersShop({
        max: max,
        rating: rating,
        tag: tag,
      });
    }
    if (tag && !rating && min && max) {
      setFiltersShop({
        min: min,
        max: max,
        tag: tag,
      });
    }
    if (tag && !rating && !min && max) {
      setFiltersShop({
        max: max,
        tag: tag,
      });
    }
    if (tag && !rating && min && !max) {
      setFiltersShop({
        min: min,
        tag: tag,
      });
    }
    if (!tag && rating && min && max) {
      setFiltersShop({
        min: min,
        max: max,
        rating: rating,
      });
    }
    if (!tag && rating && !min && !max) {
      setFiltersShop({
        rating: rating,
      });
    }
    if (!tag && rating && min && !max) {
      setFiltersShop({
        min: min,
        rating: rating,
      });
    }
    if (!tag && rating && !min && max) {
      setFiltersShop({
        max: max,
        rating: rating,
      });
    }
    if (!tag && !rating && min && max) {
      setFiltersShop({
        min: min,
        max: max,
      });
    }
    if (!tag && !rating && !min && max) {
      setFiltersShop({
        max: max,
      });
    }
    if (!tag && !rating && min && !max) {
      setFiltersShop({
        min: min,
      });
    }
  }
  if (value.toLowerCase() !== "") {
    if (tag && rating && min && max) {
      setFiltersShop({
        category: value.toLowerCase(),
        min: min,
        max: max,
        rating: rating,
        tag: tag,
      });
    }
    if (!tag && !rating && !min && !max) {
      setFiltersShop({
        category: value.toLowerCase(),
      });
    }
    if (tag && !rating && !min && !max) {
      setFiltersShop({
        category: value.toLowerCase(),
        tag: tag,
      });
    }
    if (tag && rating && !min && !max) {
      setFiltersShop({
        category: value.toLowerCase(),
        rating: rating,
        tag: tag,
      });
    }
    if (tag && rating && min && !max) {
      setFiltersShop({
        category: value.toLowerCase(),
        min: min,
        rating: rating,
        tag: tag,
      });
    }
    if (tag && rating && !min && max) {
      setFiltersShop({
        category: value.toLowerCase(),
        max: max,
        rating: rating,
        tag: tag,
      });
    }
    if (tag && !rating && min && max) {
      setFiltersShop({
        category: value.toLowerCase(),
        min: min,
        max: max,
        tag: tag,
      });
    }
    if (tag && !rating && !min && max) {
      setFiltersShop({
        category: value.toLowerCase(),
        max: max,
        tag: tag,
      });
    }
    if (tag && !rating && min && !max) {
      setFiltersShop({
        category: value.toLowerCase(),
        min: min,
        tag: tag,
      });
    }
    if (!tag && rating && min && max) {
      setFiltersShop({
        category: value.toLowerCase(),
        min: min,
        max: max,
        rating: rating,
      });
    }
    if (!tag && rating && !min && !max) {
      setFiltersShop({
        category: value.toLowerCase(),
        rating: rating,
      });
    }
    if (!tag && rating && min && !max) {
      setFiltersShop({
        category: value.toLowerCase(),
        min: min,
        rating: rating,
      });
    }
    if (!tag && rating && !min && max) {
      setFiltersShop({
        category: value.toLowerCase(),
        max: max,
        rating: rating,
      });
    }
    if (!tag && !rating && min && max) {
      setFiltersShop({
        category: value.toLowerCase(),
        min: min,
        max: max,
      });
    }
    if (!tag && !rating && !min && max) {
      setFiltersShop({
        category: value.toLowerCase(),
        max: max,
      });
    }
    if (!tag && !rating && min && !max) {
      setFiltersShop({
        category: value.toLowerCase(),
        min: min,
      });
    }
  }
}
