package com.book_store.service;

import com.book_store.model.Book;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IBookService {
    List<Book> findAll(@Param("keyword") String keyword);

    Optional<Book> findById(Integer id);

    void save(Book book);

    void detail(Book book);

}
