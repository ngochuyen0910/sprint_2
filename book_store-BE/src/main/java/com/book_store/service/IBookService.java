package com.book_store.service;

import com.book_store.model.Book;

import java.util.List;
import java.util.Optional;

public interface IBookService {
    List<Book> findAll();

    Optional<Book> findById(Integer id);

    void save(Book book);

    void detail(Book book);

}
