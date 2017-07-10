import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//whenever app state changes, this container will rerender with new list of books
function mapStateToProps(state) {
    //whatever is returned will show up as props 
    //inside of BookList
    return {
        books: state.books
    };
}

//anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook action is called, the result
    //should be pass to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}
//promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Makie it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);