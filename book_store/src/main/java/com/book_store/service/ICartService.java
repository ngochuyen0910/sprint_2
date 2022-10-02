package com.book_store.service;

import com.book_store.dto.BookCartDto;
import com.book_store.model.Cart;

import java.util.List;

public interface ICartService {
    List<BookCartDto> findAll();
}
