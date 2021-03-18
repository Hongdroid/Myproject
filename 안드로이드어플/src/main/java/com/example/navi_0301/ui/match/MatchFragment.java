package com.example.navi_0301.ui.match;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.example.navi_0301.R;

public class MatchFragment extends Fragment {
    int[] img = {R.drawable.man1, R.drawable.man2, R.drawable.man3, R.drawable.man4, R.drawable.man5};
    int[] img3 = {R.drawable.man6, R.drawable.man7, R.drawable.man8, R.drawable.man9, R.drawable.man10};
    private ImageView img_view;
    private ImageView img_view3;
    int cnt = 0;
    int cnt1 = 0;
    private Button btn1;
    private Button btn2;



    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {

        View fragment = inflater.inflate(R.layout.fragment_match, container, false);
        img_view = fragment.findViewById(R.id.img_view);
        img_view3 = fragment.findViewById(R.id.img_view3);

        Button btn1 = fragment.findViewById(R.id.btn1);
        Button btn2 = fragment.findViewById(R.id.btn2);
        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (cnt < 4) {
                    cnt++;
                    img_view3.setImageResource(img3[cnt]);


                    Toast.makeText(getActivity(), "축하합니다", Toast.LENGTH_SHORT).show();

                } else if (cnt == 4) {

                    Toast.makeText(getActivity(), "축하합니다", Toast.LENGTH_SHORT).show();
                }
            }
        });

        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (cnt1 < 4) {
                    cnt1++;
                    img_view.setImageResource(img[cnt1]);

                } else {

                }
            }
        });
        return fragment;
    }
}