

public class Student { 
 
    private int id; 
    private String name; 
    private String course; 

    public Student() { 
    } 
 

    public Student(int id, String name, String course) { 
        this.id = id; 
        this.name = name; 
        this.course = course; 
    } 

    public int getId() { 
        return id; 
 } 
 
    public void setId(int id) { 
        this.id = id; 
    }  
 
    public String getName() { 
        return name; 
    } 
 
    public void setName(String name) { 
        this.name = name; 
    }  
 
    public String getCourse() { 
        return course; 
    } 
 
    public void setCourse(String course) { 
        this.course = course; 
    } 
}

package com.example.student; 
 
import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.*; 
 
 
@RestController 
@RequestMapping("/") 
public class StudentController { 
 
    private Student student; 
 
    @GetMapping 
    public String welcomeMessage() { 
        return "Welcome to Student Management REST API"; 
    } 
 
    @GetMapping("/student") 
    public ResponseEntity<Student> getStudent() { 
 
        if (student == null) { 
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
 } 
 
        return new ResponseEntity<>(student, HttpStatus.OK); 
    } 
 
    @PostMapping("/student") 
    public ResponseEntity<Student> createStudent(@RequestBody Student student) { 
 
        this.student = student; 
        return new ResponseEntity<>(student, HttpStatus.CREATED); 
    } 
} 

Create class StudentRestApiApplication 
 
package com.example.student; 
import org.springframework.boot.SpringApplication; 
import org.springframework.boot.autoconfigure.SpringBootApplication; 
 
@SpringBootApplication
public class StudentRestApiApplication { 
 
    public static void main(String[] args) { 
        SpringApplication.run(StudentRestApiApplication.class, args); 
    } 
}