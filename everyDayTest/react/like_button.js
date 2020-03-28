const e = React.createElement;

// 显示一个 "Like" <button>
function LikeButton() {
  return <button onClick={() => this.setState({ liked: true })}>Like</button>;
}
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
