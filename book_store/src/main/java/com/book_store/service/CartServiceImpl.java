package com.book_store.service;

import com.book_store.dto.BookCartDto;
import com.book_store.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements ICartService {
    @Autowired
    ICartRepository iCartRepository;

    @Override
    public List<BookCartDto> findAll() {
        return iCartRepository.find();
    }
}
