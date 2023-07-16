package com.example.Student.Controller;

import java.util.List;
import java.util.Optional;
import java.util.ResourceBundle;
import java.util.function.Function;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Student.Entity.Student;
import com.example.Student.Repository.StudentRepository;
import com.example.Student.Service.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class StudentController {
	
	//my first project souvik now
	
	@Autowired
	StudentService studentservice;
	
	@Autowired
	StudentRepository repository;
	
	StudentController(StudentService studentservice){
		this.studentservice=studentservice;
	}
	
	@GetMapping("/allstudents")
	public ResponseEntity<?> getAllStudents(){
		return new ResponseEntity<List>(studentservice.getallStudents(),HttpStatus.OK);
	}

	@GetMapping("/getstudent/{id}")
	public ResponseEntity<?> getStudentById(@PathVariable Long id){
		//Student student=new Student();

		try {

			Student studententity = repository.findById(id).get();

			/* BeanUtils.copyProperties(studententity,student); */

			return new ResponseEntity<>(studententity, HttpStatus.OK);
		}
		catch (Exception e){
			return new ResponseEntity<>("Student not found with the input id: "+id, HttpStatus.BAD_REQUEST);
		}

	}
	
	@PostMapping("/addstudent")
	public ResponseEntity<?> addStudent(@Valid @RequestBody Student student) {
		//Student str=new Student();
		Student nw_student=studentservice.addStudent(student);
		
		return new ResponseEntity<Student>(nw_student,HttpStatus.CREATED);
	}
	
	@PutMapping("/updatestudent/{id}")
	public Optional<Object> updateStudent(@Valid @RequestBody Student student,@PathVariable Long id) {
		return repository.findById(id).map( e -> {
			e.setName(student.getName());
			e.setStandard(student.getStandard());
			e.setAddress(student.getAddress());
			return repository.save(e);
			
		});
		
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteById(@PathVariable Long id) {
		try {
			repository.deleteById(id);
			return "Success";
			
		}catch(Exception e) {
			return "Fail";
		}
	}
	
	
	

}
