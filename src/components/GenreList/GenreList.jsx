import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function GenreList() {
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
}