package com.example.navi_0301.ui.mypage;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import com.example.navi_0301.R;


public class MyPageFragment extends Fragment {
    Button btn_up1;
    Button btn_up2;
    Button btn_up3;
    Button btn_up4;
    Button btn_up5;

    TextView edt_name;
    TextView edt_age;
    TextView edt_loc;
    TextView edt_hobby;
    TextView edt_fre;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View fragment = inflater.inflate(R.layout.fragment_my_page, container, false);

        btn_up1 = fragment.findViewById(R.id.btn_up1);
        btn_up2 = fragment.findViewById(R.id.btn_up2);
        btn_up3 = fragment.findViewById(R.id.btn_up3);
        btn_up4 = fragment.findViewById(R.id.btn_up4);
        btn_up5 = fragment.findViewById(R.id.btn_up5);

        edt_name = fragment.findViewById(R.id.edt_name);
        edt_age = fragment.findViewById(R.id.edt_age);
        edt_loc = fragment.findViewById(R.id.edt_loc);
        edt_hobby = fragment.findViewById(R.id.edt_hobby);
        edt_fre = fragment.findViewById(R.id.edt_fre);






        fragment.findViewById(R.id.btn_up1).setOnClickListener(
                new Button.OnClickListener(){
                    @Override
                    public void onClick(View v) {
                        edt_name.setText(btn_up1.getText());
                    }
                }
        );



        return fragment;
    }
}

