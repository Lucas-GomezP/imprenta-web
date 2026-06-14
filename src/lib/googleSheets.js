export async function getPreciosImpresion() {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSoootkJKgnogLHeJ8g1499pUDMDJZaQVTPyIXVBBXnx02xC_9X7FYaaa8qZeEq0DWCvgi6X9gZ7ssG/pub?gid=230258882&single=true&output=tsv"
  );

  const text = await response.text();

  const rows = text.trim().split("\n");

  const headers = rows[0]
    .split("\t")
    .map(header => header.trim());

  return rows.slice(1).map(row => {
    const values = row.split("\t");

    return headers.reduce((obj, header, index) => {
      obj[header] = values[index]?.trim() ?? "";
      return obj;
    }, {});
  });
}

export async function getPreciosAnillado() {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSoootkJKgnogLHeJ8g1499pUDMDJZaQVTPyIXVBBXnx02xC_9X7FYaaa8qZeEq0DWCvgi6X9gZ7ssG/pub?gid=1429135805&single=true&output=tsv"
  );

  const text = await response.text();

  const rows = text.trim().split("\n");

  const headers = rows[0]
    .split("\t")
    .map(header => header.trim());

  return rows.slice(1).map(row => {
    const values = row.split("\t");

    return headers.reduce((obj, header, index) => {
      obj[header] = values[index]?.trim() ?? "";
      return obj;
    }, {});
  });
}