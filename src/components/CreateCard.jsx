function createCard({ addCity }) {
  const handleClick = e => {
    e.preventDefault();
    const city = {
      id: 5,
      title: "Amsterdam",
      isVisited: true,
      imgUrl:
        "https://images.unsplash.com/photo-1459679749680-18eb1eb37418?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1zdGVyZGFtfGVufDB8fDB8fHww",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quisquam nemo esse quis totam officiis magni molestiae reprehenderit!"
    };
    addCity(city);
  };
  return (
    <form className="flex flex-col">
      <input type="text" placeholder="testo" />
      <input type="text" placeholder="testo" />
      <input type="text" placeholder="testo" />
      <button onClick={handleClick}>Invia</button>
    </form>
  );
}
export default createCard;
