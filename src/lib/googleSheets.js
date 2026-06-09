export async function getPreciosImpresion() {
  const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4kiTGMKcaZutHp43Y_YP-PGQapl_xvC9nfrC5zIgdv1EYZmrkrkUl-GBDNmZq-Lkd0P1qlKJk_8Ip/pub?gid=0&single=true&output=tsv");
  const text = await response.text();
  
  return text;
}

export async function getPreciosAnillado() {
  // fetch sheet
}