interface CompareTableProps {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  note: string;
  /** Index (into `headers`) of a column to tint as "ours"; omit for none. */
  accentColumn?: number;
}

/** The comparison matrix shared by /compare and the pair pages. */
export function CompareTable({
  headers,
  rows,
  note,
  accentColumn,
}: CompareTableProps) {
  return (
    <>
      <div className="mt-8 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-3xl border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              {headers.map((header, i) =>
                // The blank corner labels nothing, and an empty <th> is a
                // header that announces itself with no name.
                header ? (
                  <th
                    key={i}
                    className={`border-b border-border p-3 font-semibold ${i === accentColumn ? 'text-accent-on-soft' : ''}`}
                  >
                    {header}
                  </th>
                ) : (
                  <td key={i} className="border-b border-border p-3" />
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="align-top">
                <th className="border-b border-border p-3 text-left font-semibold whitespace-nowrap">
                  {row[0]}
                </th>
                {row.slice(1).map((cell, j) => (
                  <td
                    key={j}
                    className={`border-b border-border p-3 text-muted ${j + 1 === accentColumn ? 'text-ink' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm text-muted">{note}</p>
    </>
  );
}
