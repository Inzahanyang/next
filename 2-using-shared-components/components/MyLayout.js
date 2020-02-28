import Header from './Header';

const layoutstyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutstyle}>
    <Header />
    {props.content}
  </div>
);

export default Layout;
