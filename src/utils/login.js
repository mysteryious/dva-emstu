export let setocaltion = (key, form) => {
  window.localStorage.setItem(key, JSON.stringify(form));
}

export let removeltion = (key) => {
  window.localStorage.removeItem(key);
}

export let getocaltion = (key) => {
  return window.localStorage.getItem(key);
}