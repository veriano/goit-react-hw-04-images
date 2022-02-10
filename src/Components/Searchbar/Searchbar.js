import { useState } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './Searchbar.css';

function Searchbar({ onSubmitHandler }) {
    const [name, setName] = useState('');
    const [page, setPage] = useState(1);

    const handleChange = e => {
        const { value } = e.currentTarget;

        setName(value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(name.trim() === '') {
            toast.error('Пожалуйста введите поисковое слово.');
            return;
        }

        onSubmitHandler({ name, page });

        setName('');
        setPage(1);
    }

        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={ handleSubmit }>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        onChange={ handleChange }
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>

        )
    
}

Searchbar.propTypes = {
    onSubmitHandler: PropTypes.func.isRequired,
}

export default Searchbar;