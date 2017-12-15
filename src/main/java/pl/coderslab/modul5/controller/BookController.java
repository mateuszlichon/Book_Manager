package pl.coderslab.modul5.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.coderslab.modul5.bean.Book;
import pl.coderslab.modul5.bean.MemoryBookService;

@RestController
@RequestMapping("/books")
public class BookController {
	
	@Autowired
	private MemoryBookService mbs;
	
	@RequestMapping("/hello")
	public String hello() {
		return "{hello: World}";
	}
	
	@RequestMapping("/helloBook")
	public Book helloBook() {
		return new Book(1l,"9788324631766","Thiniking	in	Java",
				"Bruce	Eckel","Helion","programming");
	}
	
	@GetMapping("/")
	public List<Book> getList() {
		return this.mbs.getList();
	}
	
}
