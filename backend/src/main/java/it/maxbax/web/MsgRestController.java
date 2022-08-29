package it.maxbax.web;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.maxbax.business.MsgService;
import it.maxbax.data.entity.Msg;

@RestController
public class MsgRestController {

	private final MsgService msgService;

	public MsgRestController(MsgService msgService) {
		this.msgService = msgService;
	}

	@PostMapping("/msgs")
	public ResponseEntity<Msg> createMsg(@RequestBody Msg msg) {
		msgService.saveMsg(msg);
		return new ResponseEntity<>(msg, HttpStatus.CREATED);
	}

	@GetMapping("/msgs")
	public ResponseEntity<List<Msg>> getAllMsgs() {
		return new ResponseEntity<>(msgService.getAllMsgs(), HttpStatus.OK);
	}

}
