//
//  ContentView.swift
//  ProjectH
//
//  Created by 홍홍홍 on 2021/03/07.
//

import SwiftUI

struct ContentView: View {
    
    @State var isNavigationBarHidden : Bool = false
    
    var body: some View {
        NavigationView{
            ZStack(alignment:.bottomTrailing){
                
                VStack(alignment:.leading, spacing:0){
                    
                    HStack{
                        NavigationLink(destination: MyList(isNavigationBarHidden: self.$isNavigationBarHidden)){
                            Image(systemName: "line.horizontal.3")
                                .font(.largeTitle)
                                .foregroundColor(Color.black)
                        }
                        
                       
                        Spacer()
                        Image(systemName: "person.crop.circle.fill")
                            .font(.largeTitle)
                    } .padding(20)
                    .padding(.horizontal,20)
                    
                    Text("매칭 시스템")
                        .font(.system(size: 40))
                        .fontWeight(.black)
                        .padding(.horizontal,20)
                    ScrollView{
                        VStack{
                        MyCard()
                        MyBasicCard()
                            MeCard(icon: "tray.fill", title: "사랑", start: "ISTP", end: "ESFP", bgColor: Color.blue)
                            MeCard(icon: "tray.fill", title: "연애", start: "ENTJ", end: "INFJ", bgColor: Color.orange)
                            MeCard(icon: "tray.fill", title: "경험", start: "ESTP", end: "INTJ", bgColor: Color.red)
                            MeCard(icon: "tray.fill", title: "매칭", start: "ESFJ", end: "ISFP", bgColor: Color.black)
                        }.padding()
                    }
                }
               
                
                
            Circle()
                .foregroundColor(Color.yellow)
                .frame(width:60,height: 60)
                .overlay(
                Image(systemName: "plus")
                    .font(.system(size: 30))
                    .foregroundColor(.white)
                )
                .padding(10)
                
                .shadow(radius: 20 )
            }
            .navigationTitle("뒤로가기")
            .navigationBarHidden(self.isNavigationBarHidden)
            .onAppear{
                self.isNavigationBarHidden=true
            }
        }
        
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            ContentView()
            ContentView()
        }
    }
}
