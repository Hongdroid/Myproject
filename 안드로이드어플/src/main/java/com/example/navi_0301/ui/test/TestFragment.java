package com.example.navi_0301.ui.test;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.fragment.app.Fragment;

import com.example.navi_0301.R;

public class TestFragment extends Fragment {
    int[] img = {R.drawable.mbti1, R.drawable.mbti2, R.drawable.mbti3, R.drawable.mbti4, R.drawable.mbti5, R.drawable.mbti6,
            R.drawable.mbti7, R.drawable.mbti8, R.drawable.mbti9, R.drawable.mbti10, R.drawable.mbti11, R.drawable.mbti12};
    private ImageView img_view1;
    String[] mbti = {"안녕","하이","메롱","ㅠㅠ"};

    int left_cnt = 0;
    int right_cnt = 0;
    private Button bbtt;
    private Button bbtt2;
    private TextView text_test;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View fragment = inflater.inflate(R.layout.fragment_test, container, false);
        img_view1 = fragment.findViewById(R.id.img_view1);

        bbtt = fragment.findViewById(R.id.bbtt);
        bbtt2 = fragment.findViewById(R.id.bbtt2);
        text_test = fragment.findViewById(R.id.text_test);

        bbtt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                img_view1.setImageResource(img[left_cnt]);


                left_cnt++;
                if (left_cnt > 8) {

                    Toast.makeText(getActivity(), "ESFP", Toast.LENGTH_SHORT).show();
                } else if (left_cnt == 12) {
                    Toast.makeText(getActivity(), "ESFP", Toast.LENGTH_SHORT).show();
                }

            }
        });

        bbtt2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                img_view1.setImageResource(img[right_cnt]);

                right_cnt++;
                if (right_cnt == 5) {

                    Toast.makeText(getActivity(), "ISTP", Toast.LENGTH_SHORT).show();

                } else {
                    Toast.makeText(getActivity(), "ISTP", Toast.LENGTH_SHORT).show();
                }
            }
        });
        return fragment;

    }
}
