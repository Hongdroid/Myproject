//
//  MyCard.swift
//  ProjectH
//
//  Created by 홍홍홍 on 2021/03/07.
//

import SwiftUI

struct MyCard : View {
    
    @State var shouldShowAlert: Bool = false
        
    var body: some View{
 
        VStack(alignment:.leading, spacing:0){
            Rectangle().frame(height:0)
            Text("오늘의 주파수")
                .font(.system(size:23))
                .fontWeight(.black)
                .padding(.bottom,5)
            Text("당신의 이상형을 선택해주세요")
                .foregroundColor(.white)
            Spacer().frame(height:20)
            HStack{
                Image("1")
                    .resizable()
                    .frame(width:50, height: 50)
                    .clipShape(Circle())
                    .overlay(
                    Circle()
                        .stroke(lineWidth: 5)
                        .foregroundColor(Color.white)
                    )
                Image("2")
                .resizable()
                    .frame(width:50, height: 50)
                    .clipShape(Circle())
                    .overlay(
                    Circle()
                        .stroke(lineWidth: 5)
                        .foregroundColor(Color.white)
                    )
                Image("3")
                    .resizable()
                    .frame(width:50, height: 50)
                    .clipShape(Circle())
                    .overlay(
                    Circle()
                        .stroke(lineWidth: 5)
                        .foregroundColor(Color.white)
                    )
                
                Spacer()
                
                Button(action:{
                    print("확인버튼 클릭")
                    self.shouldShowAlert = true
                }){
                    Text("이상형매칭")
                        .fontWeight(/*@START_MENU_TOKEN@*/.bold/*@END_MENU_TOKEN@*/)
                        .foregroundColor(.white)
                        .padding()
                        .frame(width:80)
                        .background(Color.blue)
                        .cornerRadius(20)
                }.alert(isPresented:
                            $shouldShowAlert){
                    Alert(title: Text("알림창"))
                }
                
               
                   
            }
        }
        .padding(30)
        .background(Color.pink)
        .cornerRadius(20)
    
    
    
    }
}
       


struct MyCard_Previews: PreviewProvider {
    static var previews: some View {
        MyCard()
    }
}

