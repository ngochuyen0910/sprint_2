package com.book_store.repository;

import com.book_store.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IBookRepository extends JpaRepository<Book, Integer> {
    @Query(value = "select * " +
            "from book " +
            "where name_book like :keyword " +
            "order by id desc",
            nativeQuery = true)
    List<Book> findAll(@Param("keyword") String keyword);
}
