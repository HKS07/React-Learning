export function filterData(t, r) {
    if (t === "" || !t) return allRestaurants;
    const newRestaurants = r.filter((e) => {
      return e?.info?.name?.toLowerCase()?.includes(t?.toLowerCase());
    });
    return newRestaurants;
  }