
const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    }
  ]

  return (
    <div className="categories_container">

      {categories.map((category) => (
        <div key={category.id} className="category_container">
          {/* <img src={} /> */}
          <div className="background_image" />
          <div className="category_body_container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default App;
