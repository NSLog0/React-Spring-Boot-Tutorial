package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by psuputsopon on 19/5/2559.
 */
@Controller
public class Home {
    @RequestMapping("/")
    public String index() {
        return "index";
    }
}
