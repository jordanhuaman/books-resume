interface PostgresqDB {
  runQuery: (sql: string) => any[];
}
interface Author {
  first: string;
  last: string
}
function getAuthors(db: PostgresqDB): Author[] {
  const authorRows = db.runQuery(`SELECT first, last FROM authors`);
  return authorRows.map(row => ({ first: row.first, last: row.last }));
}

// How to test
interface DB {
  runQuery: (sql: string) => any[];
}

function getAuthor2(db: DB, id: number): Author[] {
  const authorRows = db.runQuery(`SELECT first, last FROM authors WHERE id = ${id}`);
  return authorRows.map(row => ({ first: row[0], last: row[1] }));
}

test('getAuthors', () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [['Toni', 'Morrison'], ['Maya', 'Angelou']];
    }
  });
  expect(authors).toEqual([
    { first: 'Toni', last: 'Morrison' },
    { first: 'Maya', last: 'Angelou' }
  ]);
});