package com.goodfor.web.board;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.goodfor.web.pxy.PageProxy;

@Repository
public interface BoardMapper {
	public int selectBoardAllCount(String ctype);
	public void insertBoardWrite(Board param);
	public List<Board> selectAllBoardCustomer(PageProxy param);
	public List<Board> selectAllBoardNotice(PageProxy param);
	public List<Board> selectAllBoardFAQ(PageProxy param);
	public Board selectBoardRead(int seq);
	public void viewCntIncrease(int seq);
	public void updateBoard(Board param);
	public void deleteBoard(int seq);
	
}
