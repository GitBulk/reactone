class Product extends React.Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src='images/products/image-aqua.png' />
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <a>Fort knight</a>
                        <p>asasd</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted: by:</span>
                        <img className='ui avatar image' src='images/avatars/daniel.jpg'/>
                    </div>
                </div>
            </div>
        );
    }
}

class ProductList extends React.Component {
    render() {
        return (
            <div className='ui unstackable items'>
                <Product />
            </div>
        );
    }
}

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);