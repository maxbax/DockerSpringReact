package it.maxbax.business;

import java.util.List;

import org.springframework.stereotype.Service;

import it.maxbax.data.entity.Msg;
import it.maxbax.data.repository.IMsgRepository;

@Service
public class MsgService {

	private final IMsgRepository msgRepository;

	public MsgService(IMsgRepository msgRepository) {
		this.msgRepository = msgRepository;
	}

	public void saveMsg(Msg msg) {
		getMsgRepository().save(msg);
	}

	public List<Msg> getAllMsgs() {
		return getMsgRepository().findAll();
	}

	public IMsgRepository getMsgRepository() {
		return msgRepository;
	}
}