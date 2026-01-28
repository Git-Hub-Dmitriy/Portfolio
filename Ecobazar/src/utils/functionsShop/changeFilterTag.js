export default function changeFilterTag(
  value,
  category,
  rating,
  min,
  max,
  setFiltersShop
) {
  if (value.length == 0) {
    if (rating && category && min && max) {
      setFiltersShop({
        category: category,
        min: min,
        max: max,
        rating: rating,
      });
    }
    if (!rating && !category && !min && !max) {
      setFiltersShop({});
    }
    if (rating && !category && !min && !max) {
      setFiltersShop({
        rating: rating,
      });
    }
    if (rating && category && !min && !max) {
      setFiltersShop({
        category: category,
        rating: rating,
      });
    }
    if (rating && category && min && !max) {
      setFiltersShop({
        category: category,
        min: min,
        rating: rating,
      });
    }
    if (rating && category && !min && max) {
      setFiltersShop({
        category: category,
        max: max,
        rating: rating,
      });
    }
    if (rating && !category && min && max) {
      setFiltersShop({
        min: min,
        max: max,
        rating: rating,
      });
    }
    if (rating && !category && !min && max) {
      setFiltersShop({
        max: max,
        rating: rating,
      });
    }
    if (rating && !category && min && !max) {
      setFiltersShop({
        min: min,
        rating: rating,
      });
    }
    if (!rating && category && min && max) {
      setFiltersShop({
        category: category,
        min: min,
        max: max,
      });
    }
    if (!rating && category && !min && !max) {
      setFiltersShop({
        category: category,
      });
    }
    if (!rating && category && min && !max) {
      setFiltersShop({
        category: category,
        min: min,
      });
    }
    if (!rating && category && !min && max) {
      setFiltersShop({
        category: category,
        max: max,
      });
    }
    if (!rating && !category && min && max) {
      setFiltersShop({
        min: min,
        max: max,
      });
    }
    if (!rating && !category && !min && max) {
      setFiltersShop({
        max: max,
      });
    }
    if (!rating && !category && min && !max) {
      setFiltersShop({
        min: min,
      });
    }
  }
  if (value !== "") {
    if (rating && category && min && max) {
      setFiltersShop({
        category: category,
        min: min,
        max: max,
        rating: rating,
        tag: value,
      });
    }
    if (!rating && !category && !min && !max) {
      setFiltersShop({
        tag: value,
      });
    }
    if (rating && !category && !min && !max) {
      setFiltersShop({
        rating: rating,
        tag: value,
      });
    }
    if (rating && category && !min && !max) {
      setFiltersShop({
        category: category,
        rating: rating,
        tag: value,
      });
    }
    if (rating && category && min && !max) {
      setFiltersShop({
        category: category,
        min: min,
        rating: rating,
        tag: value,
      });
    }
    if (rating && category && !min && max) {
      setFiltersShop({
        category: category,
        max: max,
        rating: rating,
        tag: value,
      });
    }
    if (rating && !category && min && max) {
      setFiltersShop({
        min: min,
        max: max,
        rating: rating,
        tag: value,
      });
    }
    if (rating && !category && !min && max) {
      setFiltersShop({
        max: max,
        rating: rating,
        tag: value,
      });
    }
    if (rating && !category && min && !max) {
      setFiltersShop({
        min: min,
        rating: rating,
        tag: value,
      });
    }
    if (!rating && category && min && max) {
      setFiltersShop({
        category: category,
        min: min,
        max: max,
        tag: value,
      });
    }
    if (!rating && category && !min && !max) {
      setFiltersShop({
        category: category,
        tag: value,
      });
    }
    if (!rating && category && min && !max) {
      setFiltersShop({
        category: category,
        min: min,
        tag: value,
      });
    }
    if (!rating && category && !min && max) {
      setFiltersShop({
        category: category,
        max: max,
        tag: value,
      });
    }
    if (!rating && !category && min && max) {
      setFiltersShop({
        min: min,
        max: max,
        tag: value,
      });
    }
    if (!rating && !category && !min && max) {
      setFiltersShop({
        max: max,
        tag: value,
      });
    }
    if (!rating && !category && min && !max) {
      setFiltersShop({
        min: min,
        tag: value,
      });
    }
  }
}
