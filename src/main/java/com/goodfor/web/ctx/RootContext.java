package com.goodfor.web.ctx;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Import;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan(basePackages= {"com.goodfor.web"})
@Import({
	MyBatisContext.class, ServletContext.class
})
public class RootContext {
	@Bean
	public DataSource dataSource() {

		  DriverManagerDataSource dataSource = new DriverManagerDataSource();

		  	dataSource.setDriverClassName("org.mariadb.jdbc.Driver");
		    dataSource.setUrl("jdbc:mariadb://goodfordb.cqhk36nxabpr.ap-northeast-2.rds.amazonaws.com:3306/goodfordb");
		    dataSource.setUsername("goodfordb");
		    dataSource.setPassword("goodfordb");
		    return dataSource;
	}
	@Bean
	public DataSourceTransactionManager txManager() {
		return new DataSourceTransactionManager(dataSource());
	}
}
