//
//  MyView.swift
//  ProjectH
//
//  Created by 홍홍홍 on 2021/03/08.
//

import SwiftUI

struct MyView : View {
    var title: String
    var bgColor: Color
    var body: some View{
        
        ZStack{
            bgColor
                .edgesIgnoringSafeArea(/*@START_MENU_TOKEN@*/.all/*@END_MENU_TOKEN@*/)
            Text(title)
                .fontWeight(.black)
                .font(.largeTitle)
                .foregroundColor(Color.white)
        }
    }
}

struct MyView_Previews: PreviewProvider {
    static var previews: some View {
        MyView(title: "마이뷰", bgColor: Color.orange)
    }
}
