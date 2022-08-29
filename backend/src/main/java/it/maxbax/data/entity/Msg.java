package it.maxbax.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "msg")
public class Msg {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long msgId;

	@Column(name = "msg_title", nullable = false)
	private String title;

	@Column(name = "message", columnDefinition = "TEXT")
	private String message;
	
	public Long getMsgId() {
		return msgId;
	}

	public void setMsgId(Long msgId) {
		this.msgId = msgId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}