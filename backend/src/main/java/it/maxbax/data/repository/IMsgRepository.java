package it.maxbax.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.maxbax.data.entity.Msg;

@Repository
public interface IMsgRepository extends JpaRepository<Msg, Long> {

	Msg findByMsgId(Long msgId);

	@Override
	List<Msg> findAll();

}
