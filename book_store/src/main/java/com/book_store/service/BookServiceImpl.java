package com.book_store.service;

import com.book_store.model.Book;
import com.book_store.repository.IBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements IBookService {
    @Autowired
    private IBookRepository iBookRepository;

    @Override
    public List<Book> findAll() {
        return iBookRepository.findAll();
    }

    @Override
    public Optional<Book> findById(Integer id) {
        return iBookRepository.findById(id);
    }

    @Override
    public void save(Book book) {
        iBookRepository.save(book);
    }

    @Override
    public void detail(Book book) {

    }
}
