export default function ConsumerBrowsePage() {
  return (
    <div>
      <h1>Browse Fresh Produce</h1>
      <input type="text" placeholder="Search produce..." />
      <select>
        <option>All</option>
        <option>Fruits</option>
        <option>Vegetables</option>
      </select>

      <div>
        <h3>Organic Tomatoes</h3>
        <p>$2.00 / lb</p>
      </div>

      <div>
        <h3>Fresh Strawberries</h3>
        <p>$4.50 / pint</p>
      </div>
    </div>
  );
}
