package com.goodfor.web.pxy;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.BiFunction;
import java.util.function.BiPredicate;
import java.util.function.Consumer;
import java.util.function.Function;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component("pxy")
@Lazy
public class Proxy {
	public String string(Object param) {
		Function<Object, String> f = String::valueOf;

		return f.apply(param);

	}

	public int integer(String param) {
		Function<String, Integer> f = Integer::parseInt;
		return f.apply(param);

	}

	public boolean equal(String t, String u) {

		BiPredicate<String, String> p = String::equals;

		return p.test(t, u);

	}

	public int random(int a, int b) {
		BiFunction<Integer, Integer, Integer> f = (t, u) -> (int) (Math.random() * (u - t)) + t;
		return f.apply(a, b);

	}

	public int[] array(int size) {
		Function<Integer, int[]> f = int[]::new;
		return f.apply(size);
	}

	public void print(String param) {
		Consumer<String> c = System.out::print;
		c.accept(param);

	}
	public String currentDate() {
		return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	}

	public String currentTime() {
		return new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date());
	}

	public File makeDir(String t, String u) {
		BiFunction<String, String, File> f = File::new;
		return f.apply(t, u);
	}

	public File makeFile(File t, String u) {
		BiFunction<File, String, File> f = File::new;
		return f.apply(t, u);
	}
}