
export const Email = () => {
  const part1 = "kathinkasewell";
  const part2 = String.fromCharCode(Math.pow(2, 6));
  const part4 = "gmail.com";
  const email = `${part1}${part2}${part4}`;

  return (
    <div>
      <a href={`mailto:${email}`}>{`${part1}${part2}${part4}`}</a>
    </div>
  );
};

export default Email;
